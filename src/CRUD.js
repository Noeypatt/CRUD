import React, { Component } from 'react'
import { connect } from "react-redux"
import './App.css'
import { getBears } from "./Action/Act"
import { addbear, updateBear, deleteBear } from "./Action/Act"
import { store } from './App'

class crudBear extends Component {
    componentDidMount = () => {
        this.props.getBears()
    }

    state = { bearState: '' }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        return (
            <div class='app'>
                <h1>CRUD Bear</h1>
                <div className='container-fluid'>
                    <h3>ID: <input name="id" placeholder='Id' value={this.props.id} onChange={this.handleChange} /></h3>
                    <h3>Bear: <input type='text' name="bearname" placeholder='Name' value={this.props.bearname} onChange={this.handleChange} /></h3>
                    <h3>Weight: <input type='number' name="weight" value={this.props.weight} onChange={this.handleChange} /></h3><br />
                </div>

                <button id='bt' class="btn btn-success" onClick={() => store.dispatch(addbear(this.state.bearname, this.state.weight))}>Add</button>
                <button id='bt' class="btn btn-warning" onClick={() => store.dispatch(updateBear(this.state.id, this.state.bearname, this.state.weight))}>Update</button>
                <button id='bt' class="btn btn-danger" onClick={() => store.dispatch(deleteBear(this.state.id))}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = ({ bears }) => { return { bears } }

const mapDispatchToProps = (dispatch) => {
    return {
        addbear: () => dispatch(addbear()),
        getBears: () => store.dispatch(getBears()),
        updateBear: () => dispatch(updateBear()),
        deleteBear: () => dispatch(deleteBear()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(crudBear)