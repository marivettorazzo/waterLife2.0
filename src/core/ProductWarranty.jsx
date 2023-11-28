import React from 'react';
import "../../src/styles/main.scss";

export default class ProductWarrant extends React.Component {
  openPdfInNewTab = () => {
    const { src } = this.props
    window.open(src)
  }
  render() {
    const { src } = this.props
    return (
      <div>
        <p><strong>Garantia</strong></p>
        <iframe src={src} style={{width: '100%', height: '100%'}}></iframe>
        <button className='create' onClick={this.openPdfInNewTab}>Open PDF</button>
      </div>
    )
  }
}