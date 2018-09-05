import Taro, { Component } from '@tarojs/taro';
import Remarkable from 'remarkable';
import { View, Text } from '@tarojs/components';
import './index.scss';
import _ from 'lodash';
import MdImage from './MdImage';

const parser = new Remarkable({
	                              html: true
                              });

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			renderList: []
		};
		this.parse = this.parse.bind(this);
	}

	componentDidMount() {
		const {md}       = this.props;
		const markdown   = md.replace(/\: \*\*/g, ':**');
		const renderList = this.parse(markdown);
		this.setState({
			              renderList
		              });
	}

	navigateTo(href) {
		let url;
		if (_.includes(href,"http")){
			url = `/routes/qrcode/index?title=Link&url=${href}`;
			Taro.navigateTo({url});
		} else if (_.includes(href,"posts")) {
			href = _.last(href.split(/\//g))
			url = `/routes/post/index?id=${href}`;
			Taro.navigateTo({url});
		}
	}

	parse(md, options) {
		if (!options) options = {};
		if (!options.name) options.name = 'md';

		const tokens      = parser.parse(md, {});
		// markdwon渲染列表
		const renderList  = [];
		// 图片高度数组
		const imageHeight = {};
		// 返回的数据
		const ret         = {
			renderList : renderList,
			imageHeight: imageHeight
		};

		const env      = [];
		// 记录当前list深度
		let listLevel  = 0;
		// 记录第N级ol的顺序
		const orderNum = [0, 0];
		let tmp;

		// 获取inline内容
		const getInlineContent = (inlineToken) => {
			const ret = [];
			let env;
			if (inlineToken.type === 'htmlblock') return;
			inlineToken.children &&
			inlineToken.children.forEach((token, index) => {
				if (['text', 'code'].indexOf(token.type) > -1) {
					if (index > 0 && inlineToken.children[index - 1].type === 'link_open') {
						ret.push({
							         type   : 'a',
							         content: token.content,
							         href   : inlineToken.children[index - 1].href
						         });
					} else {
						ret.push({
							         type   : env || token.type,
							         content: token.content
						         });
					}
					env = '';
				} else if (token.type === 'del_open') {
					env = 'deleted';
				} else if (token.type === 'strong_open') {
					env = 'strong';
				} else if (token.type === 'em_open') {
					env = 'em';
				} else if (token.type === 'image') {
					ret.push({
						         type: token.type,
						         alt : token.alt,
						         src : token.src
					         });
				}
			});
			return ret;
		};

		const getBlockContent = (blockToken, index) => {
			if (blockToken.type === 'htmlblock') {
				return getInlineContent(blockToken);
			} else if (blockToken.type === 'heading_open') {
				return {
					type   : 'h' + blockToken.hLevel,
					content: getInlineContent(tokens[index + 1])
				};
			} else if (blockToken.type === 'paragraph_open') {
				let prefix = '';
				if (env.length) {
					prefix = env.join('_') + '_';
				}

				const content = getInlineContent(tokens[index + 1]);

				// 处理ol前的数字
				if (env[env.length - 1] === 'li' && env[env.length - 2] === 'ol') {
					content.unshift({
						                type   : 'text',
						                content: orderNum[listLevel - 1] + '. '
					                });
				}
				return {
					type   : prefix + 'p',
					content: content
				};
			} else if (blockToken.type === 'fence') {
				return {
					type   : 'code',
					content: blockToken.content
				};
			} else if (blockToken.type === 'code') {
				return {
					type   : 'code',
					content: blockToken.content
				};
			} else if (blockToken.type === 'bullet_list_open') {
				env.push('ul');
				listLevel++;
			} else if (blockToken.type === 'ordered_list_open') {
				env.push('ol');
				listLevel++;
			} else if (blockToken.type === 'list_item_open') {
				env.push('li');
				if (env[env.length - 2] === 'ol') {
					orderNum[listLevel - 1]++;
				}
			} else if (blockToken.type === 'list_item_close') {
				env.pop();
			} else if (blockToken.type === 'bullet_list_close') {
				env.pop();
				listLevel--;
			} else if (blockToken.type === 'ordered_list_close') {
				env.pop();
				listLevel--;
				orderNum[listLevel] = 0;
			} else if (blockToken.type === 'blockquote_open') {
				env.push('blockquote');
			} else if (blockToken.type === 'blockquote_close') {
				env.pop();
			} else if (blockToken.type === 'tr_open') {
				tmp = {
					type   : 'table_tr',
					content: []
				};
				return tmp;
			} else if (blockToken.type === 'th_open') {
				tmp.content.push({
					                 type   : 'table_th',
					                 content: getInlineContent(tokens[index + 1])
						                 .map(function (inline) {
							                 return inline.content;
						                 })
						                 .join('')
				                 });
			} else if (blockToken.type === 'td_open') {
				tmp.content.push({
					                 type   : 'table_td',
					                 content: getInlineContent(tokens[index + 1])
						                 .map(function (inline) {
							                 return inline.content;
						                 })
						                 .join('')
				                 });
			}
		};

		tokens.forEach(function (token, index) {
			let blockContent = getBlockContent(token, index);
			if (!blockContent) return;
			if (!Array.isArray(blockContent)) {
				blockContent = [blockContent];
			}
			blockContent.forEach(function (block) {
				if (Array.isArray(block.content)) {
					block.isArray = true;
				} else {
					block.isArray = false;
				}
				renderList.push(block);
			});
		});

		var obj           = {};
		obj[options.name] = ret;

		return renderList;
	}

	render() {
		return (
			<View class="wrapper">
				{this.state.renderList.length > 0 &&
				 this.state.renderList.map(renderBlock => {
					 return (
						 <View className={renderBlock.type} key={renderBlock.blockIndex}>
							 {renderBlock.isArray &&
							  renderBlock.content.map(renderInline => (
								  <block key={renderInline.inlineIndex}>
									  {renderInline.type !== 'image'
									   ? (
										   renderInline.type === 'a'
										   ? (
											   <Text className={'inline_' + renderInline.type}
											         onClick={this.navigateTo.bind(this, renderInline.href)}>
												   {renderInline.content}
											   </Text>)
										   : (
											   <Text className={'inline_' + renderInline.type}>
												   {renderInline.content}
											   </Text>
										   ))
									   : (
										   <MdImage alt={renderInline.alt} src={renderInline.src}/>
									   )}
								  </block>
							  ))}
							 {!renderBlock.isArray &&
							  renderBlock.type === 'code' && <View>{renderBlock.content}</View>}
						 </View>
					 );
				 })}
			</View>
		);
	}
}
