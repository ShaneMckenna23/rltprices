import React from 'react'
import {Link} from 'react-router-dom'
import {NavItem} from 'react-bootstrap'

class LinkButton extends Link {
    render() {
      const {
        to,
        children,
        ...rest
      } = this.props;
      return (<NavItem {...rest} onClick={this.handleClick}>{children}</NavItem>);
    }
  }

  export default LinkButton