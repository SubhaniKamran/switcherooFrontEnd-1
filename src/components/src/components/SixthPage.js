import React from "react";
import DefaultRow from "./DefaultRow";
import MegaHeading from "./MegaHeading";
import DataGrid from "./DataGrid";
import TopPageLogo from "./logo";

const SixthPage = () => {
	return (
		<>
			<div className="pageHeight">
				<TopPageLogo />
				<DataGrid applicant="2">
					<h2 className="text-gray-700  font-normal normal-case">
						6 Financial Commitments (continued)
					</h2>
				</DataGrid>
				<MegaHeading
					headingTitle="Existing Property Details"
					headingNumber="7"
					className="mt-10"
				/>
				<div className="mt-2 mb-2 elements-container flex justify-between w-full">
					<div className="h-6 w-2/5"></div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary ">
						Applicant 1
					</div>
					<div className="h-6 w-28 text-center uppercase font-semibold color-primary">
						Applicant 2
					</div>
				</div>
				<div className="elements-container mt-2">
					<DefaultRow title="Property address" inputHeight="100px" />
					<DefaultRow title="Eircode" />
					<DefaultRow
						title="Estimated market value"
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Debt "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Rent (monthly) "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Repayment (monthly) "
						additionalClassOne="with-symbol "
						additionalClassTwo="with-symbol "
					/>
					<DefaultRow
						title="Rate (to 2 decimals)"
						additionalClassOne="with-percentage "
						additionalClassTwo="with-percentage "
					/>
					<DefaultRow title="Lender name" />
				</div>
			</div>
		</>
	);
};

export default SixthPage;
