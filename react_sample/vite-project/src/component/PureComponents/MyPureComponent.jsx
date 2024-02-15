import React ,{PureComponent} from "react";
class MyPureComponent extends PureComponent{
    render(){
        console.log('re rendering');
        return <div>{this.props.message}</div>
    }
}
export default MyPureComponent;