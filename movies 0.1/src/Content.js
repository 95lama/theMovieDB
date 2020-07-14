import React from 'react'

class Content extends React.Component {
    render() {
        return <table key = {this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img src=""/>
            </td>
            <td>
              {this.props.movie.title}
              <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default Content 