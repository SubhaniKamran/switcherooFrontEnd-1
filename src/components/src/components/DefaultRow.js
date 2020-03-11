import React from "react";
const DefaultRow = ({
	styles,
	className,
	title,
	inputHeight = 25,
	name,
	appData,
	additionalClassOne,
	additionalClassTwo
}) => {
	return (
		<div
			className={
				className
					? className + " flex mt-1  justify-between items-start w-full "
					: " flex mt-1  justify-between items-start w-full "
			}
			style={styles}
		>
			<div className="w-2/5 ">
				<p>{title}</p>
			</div>
			<div
				className={additionalClassOne ? additionalClassOne + " w-28" : " w-28"}
			>
				<textarea
					className="w-full bg-tertiary"
					value={appData ? appData[name] : ""}
					name={name}
					style={{ height: inputHeight }}
				></textarea>
			</div>
			<div
				className={additionalClassTwo ? additionalClassTwo + " w-28" : " w-28"}
			>
				<textarea
					className="w-full bg-tertiary"
					style={{ height: inputHeight }}
				></textarea>
			</div>
		</div>
	);
};

export default DefaultRow;
