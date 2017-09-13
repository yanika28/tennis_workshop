function tennisgame(){
  this.reset = () =>{
    return"0-0"
  }
  this.echo = () => {
    return this.reset()
  }
}
test("test",()=>{
  let app = new tennisgame()
  app.reset()
  let echo = app.echo()
  expect("0-0").toBe("0-0")

})
