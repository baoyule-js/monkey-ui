import React,{ Children, cloneElement } from 'react';
import classNames from 'classnames';

export default class Row extends React.Component{
	render(){
		const { type, justify, align, className, gutter, style, children } = this.props;
		const classes = classNames({
			'ant-row': !type,
			[`ant-row-${type}`]: type,
			[`ant-row-${type}-${justify}`]: justify,
			[`ant-row-${type}-${align}`]: align,
			[className]: className,
		});
		const rowStyle = gutter > 0 ? {
			marginLeft: gutter / -2,
			marginRight: gutter / -2,
		} : style;
		const cols = Children.map(children, col => {
			if (!col) return null;

			return cloneElement(col, {
				style: gutter > 0 ? {
					paddingLeft: gutter / 2,
					paddingRight: gutter / 2,
				} : col.props.style,
			});
		});
		return <div  className={classes} style={rowStyle}>{cols}</div>;
	}
}

Row.propTypes = {
    type: React.PropTypes.string,
    align: React.PropTypes.string,
    justify: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    gutter: React.PropTypes.number
}

