import React from 'react';
import PropTypes from 'prop-types';


class CatalogueTitle extends React.Component {
    static propTypes = {
        titleList: PropTypes.arrayOf(
            PropTypes.string.isRequired
        )
    };

    render() {
        return (
            <tr>
                {this.props.titleList.map((title,i) =>
                    <td key={i}>{title}</td>
                )
                }
            </tr>
        )
    }
}

export default CatalogueTitle;