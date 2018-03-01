export default function() {
  wx
    .createSelectorQuery()
    .selectAll('.hide')
    .boundingClientRect(rects => {
      rects.forEach(rect => {
        const ifShow = rect.top - this.data.sysInfo.windowHeight <= 0;
        this.setData({
          showId: ifShow && rect.id > this.data.showId ? rect.id : this.data.showId,
          show: {
            ...this.data.show,
            [rect.id]: ifShow,
          },
        });
      });
    })
    .exec();
}
