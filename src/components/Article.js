import React, { Component } from "react";

class Article extends Component {
    state = {
        isOpen: true
    }
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         isOpen: true
    //     }
    //     // экспериментальный синтаксис
    //     // state = {
    //     //     isOpen: true
    //     // }
    //     this.handleClick = handleClick.bind(this)
    // }

    render() {
        const { article } = this.props
        console.log('---', this.props)
        const body = this.state.isOpen &&
            <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width: '60%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">creation date: 
                        {(new Date(article.date)).toDateString()}</h6>
                </div>
            </div>
        )
    }
    handleClick = () => {
        console.log('----', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
} 

export default Article