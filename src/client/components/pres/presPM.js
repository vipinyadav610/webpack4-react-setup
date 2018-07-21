class presPM {
  constructor(props) {
    this.props = props
  }
  //   componentDidMount = () => {
  //     this.props.getApiData()
  //   }
  onButtonClick = () => {
    this.props.getApiData()
  }
}
export default presPM
