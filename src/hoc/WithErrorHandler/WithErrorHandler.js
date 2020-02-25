import React, { Component } from "react";
import Aux from "../Aux/aux";
import Modal from "../../containers/Burger/UI/Modal/Modal";

const withErrorHandle = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      this.reqInteceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInteceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      console.log(this.reqInteceptor, this.resInteceptor);
      axios.interceptors.request.eject(this.reqInteceptor);
      axios.interceptors.response.eject(this.resInteceptor);
    }
    errorClickHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            backdropHandler={this.errorClickHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandle;
