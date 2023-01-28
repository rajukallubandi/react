import { Component } from "react";

class Form extends Component {
    state = [{ first: 0, second: 0, result: "", isCheck: null }]

    firstNum = (event) => {
        console.log(event.target.value)
        this.setState({ first: parseInt(event.target.value) })
    }

    secNum = (event) => {
        console.log(event.target.value)
        this.setState({ second: parseInt(event.target.value) })
    }

    changeOperator = (event) => {
        console.log(event.target.value)
        this.setState({ operator: event.target.value })
    }

    handleAddNumber = () => {
         debugger
        const { first, second, operator } = this.state
        let Answer = ""
        if (!this.state.isCheck) {
            alert("select one")
        }
        else if (operator === '+') {

            Answer = first + second;
        }

        else if (operator === '-') {
            Answer = first - second
        }
        else if (operator === '*') {
            Answer = first * second
        }
        else if (operator === '/') {
            Answer = first / second
        }
        else if (operator === '%') {
            Answer = first % second
        }


        this.setState({ result: Answer })
        console.log(Answer)

    }


    handleCheck = (event) => {
        let check = event.target.checked
        this.setState({ isCheck: check })
    }


    render() {

        const { operator, result, Addnumber } = this.state

        return (
            <div>
                <form>
                    <input type="number" placeholder="number1" onChange={this.firstNum} />
                    <input type="number" placeholder="number1" onChange={this.secNum} />

                    <select Value={operator} onChange={(event) => this.changeOperator(event)} >
                        <option Value="+">+</option>
                        <option Value="-">-</option>
                        <option Value="*">*</option>
                        <option Value="/">/</option>
                        <option Value="%">%</option>
                    </select>


                </form>
                <button onClick={() => this.handleAddNumber()}>result</button>
                <input type="checkbox" value={this.state.isCheck} onClick={(event) => this.handleCheck(event)} />
                <p> reslut:<input type="" value={this.state.result} /></p>

            </div>
        )
    }
}
export default Form
