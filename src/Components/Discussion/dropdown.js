import React, { Component } from 'react';

class Dropdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      chart: this.props.content
    }
  }

  handleClickOutside(e){
    this.setState({
      listOpen: false
    })
  }

  selectItem = (title, id, stateKey,chart) => {
    this.setState({
      headerTitle: title,
      listOpen: false,
      chart: chart
    })
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle, chart} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={this.toggleList}>
          <div className="dd-header-title">{headerTitle}</div>
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item)=> (
            <li className="dd-list-item" key={item.id} onClick={() => this.selectItem(item.title, item.id, item.key, item.x)}>{item.title} {item.selected}</li>
          ))}
        </ul>}
        <div className="chart" key={this.props.title}>{chart}</div>
      </div>
    )
  }
}

export default Dropdown;