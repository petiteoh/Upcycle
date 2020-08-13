import React from "react";
import { withRouter, Link } from "react-router-dom";

class CategoryDD extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories } = this.props;
        
        return (
            <div>
                <ul>
                    {
                        categories.map((category => {
                            <li>
                                {category}
                            </li>
                        }))
                    }
                </ul>
            </div>
        )
    }
}

export default CategoryDD;