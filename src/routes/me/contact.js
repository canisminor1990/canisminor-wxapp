import Taro, { Component } from '@tarojs/taro';
import { View, Image, Input } from '@tarojs/components';
import { WhiteSpace, Loading, Card, Title } from '../../components';
import './contact.scss';
import { connect } from '@tarojs/redux';
import action from '../../utils/action';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';

@connect(({contact, loading}) => ({
	...contact,
	loading: loading.effects['contact/get']
}))
export default class extends Component {

	static defaultProps = {
		main   : [],
		loading: true,
		open   : false
	};

	state = {
		name   : '',
		email  : '',
		message: '',
		modal  : {
			title  : '',
			content: '',
			button : ''
		}
	};

	config = {
		navigationBarTitleText: 'Contact'
	};

	componentDidMount = () => {
		this.props.dispatch(action('contact/get'));
	};

	handleInput({target}) {
		this.setState({[target.id]: target.value});
	}

	handleSend() {
		if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
			this.setState({
				              modal: {
					              title  : 'Oops...',
					              button : 'got it',
					              content: 'The info or the message cannot be empty 😥'
				              }
			              });

			this.setState({open: true});
			return;
		}
		this.props.dispatch(action('mail/get', {
			subject: `${this.state.name} <${this.state.email}>`,
			text   : `来自WxApp: ${this.state.message}`
		}));
		this.setState({
			              modal: {
				              title  : 'Thank you',
				              button : 'close',
				              content: 'Message has be sent, thanks for your contact 😘'
			              }
		              });
		this.setState({open: true});

	}

	handleClick() {
		this.setState({open: false});
	}

	render() {
		const {loading, main} = this.props;
		return (
			<View className='contact'>
				<Card padding>
					<Title type="contact" desc={
						`Do you fancy saying hi to me or you need my help with your project? feel free 2 contact me 😉`
					}/>
					{loading ? <Loading/> : main.map((item, i) => (
						<View className="cell" key={i}>
							<Image src={`https://canisminor.cc${item.icon}`} mode="widthFix" lazyLoad/>
							<View className="title">{item.title}</View>
						</View>
					))}
				</Card>
				<WhiteSpace/>
				<Card title="Send Message">
					<View className="input">
						<View>NAME</View>
						<Input id="name" placeholder='your name' onBlur={this.handleInput.bind(this)}/>
					</View>
					<View className="input">
						<View>E-MAIL</View>
						<Input id="email" placeholder='your e-mail' onBlur={this.handleInput.bind(this)}/>
					</View>
					<Textarea id="message" className="textarea" placeholder="Input message..."
					          onBlur={this.handleInput.bind(this)}/>
					<View className="footer" hoverClass="footer-hover" onClick={this.handleSend.bind(this)}>SEND MESSAGE</View>
				</Card>
				<WhiteSpace/>
				<WhiteSpace/>
				<WhiteSpace/>
				<AtModal isOpened={this.state.open}>
					<AtModalContent>
						<View className="modal">
							<View className="title">{this.state.modal.title}</View>
							<View className="desc">{this.state.modal.content}</View>
						</View>
					</AtModalContent>
					<View className="footer" hoverClass="footer-hover" onClick={this.handleClick.bind(this)}>
						{this.state.modal.button.toUpperCase()}
					</View>
				</AtModal>
			</View>
		);
	}
}

