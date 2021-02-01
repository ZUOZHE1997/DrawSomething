export class Draw {
  constructor(element) {
    // 获取实例
    this.canvas = document.getElementById(element)
    this.ctx = this.canvas.getContext('2d')
    // 初始化画笔
    this.painting = false
    this.lastPoint = { x: undefined, y: undefined }
  }
  init() {
    this.canvas.onmousedown = (e) => {
      this.readyDraw(e)
    }
    this.canvas.onmousemove = (e) => {
      this.drawing(e)
    }
    this.canvas.onmouseup = () => {
      this.stopDraw()
    }
  }
  // 开始准备绘制
  readyDraw(e) {
    this.painting = true
    let x = e.offsetX 
    let y = e.offsetY
    this.lastPoint = { x: x, y: y }
  }
  // 鼠标点击canvas正在绘画
  drawing(e) {
    if (this.painting) {
      let x = e.offsetX 
      let y = e.offsetY
      let newPoint = { x: x, y: y }
      this.drawLine(this.lastPoint.x, this.lastPoint.y, newPoint.x, newPoint.y)
      this.lastPoint = newPoint
    }
  }
  // 停止绘制
  stopDraw() {
    this.painting = false
  }
   // 鼠标点击画点
  drawCircle(x, y, radius) {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.fill()
  }
  // 鼠标平移划线
  drawLine(x1, y1, x2, y2) {
    this.ctx.lineWidth = 3
    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
    this.ctx.moveTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.stroke()
    this.ctx.closePath()
  }
}
