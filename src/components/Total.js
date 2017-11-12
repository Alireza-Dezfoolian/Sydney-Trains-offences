import React from 'react';

const Total = props => {
	return (
	<div className='total-wrapper'>
		{ props.total.map((d, i) => 
		<table name={d} key={d}>{d.map((d, i, a) =>
			i % 2===0 ?
			<tbody key={d}>
				<tr key={d}>
					<td className="total odd" name={d} key={d}>{d}</td>
					<td className="total even" name={a[i+1]} key={a[i+1]}>{a[i+1]}</td>
				</tr>
			</tbody>
			: null
			)}
		</table>) }
	</div> )
}

export default Total;