import React from 'react';
import { useSelector } from 'react-redux';
import * as DS from './userdashboard.style';
import { HarmBurger } from '../hambugger/hamBurger';
import { RecentTransactions } from '../../asset/data';
import BootstrapTable from 'react-bootstrap-table-next';

export const DashBoard = () => {
	const columns = [
		{
			dataField: 'accountName',
			text: 'Account Name',
		},
		{
			dataField: 'accountNumber',
			text: 'Account Number',
		},
		{
			dataField: 'transactioncost',
			text: 'Transaction Cost',
		},
		{
			dataField: 'acctBalance',
			text: 'Account Balance',
		},
	];

	const profileData = useSelector(state => state.ViewProfile.data);

	return (
		<DS.DashboardContainer>
			<DS.DashboardWrapper>
				<DS.LeftSideBar>
					<HarmBurger />
				</DS.LeftSideBar>

				<DS.RightSection>
					<DS.Div>DashBoard</DS.Div>
					<DS.containerAcct>
						<DS.fontAwesomeWrapper>
							<DS.img
								src={require('../../asset/images/icons8-sales-performance-100 (1).png')}
								alt="image"
							/>
						</DS.fontAwesomeWrapper>

						<DS.AccountCreationInfo>
							<DS.Header>you are welcome olorunwa lawrence </DS.Header>
							<DS.Para> Thank you for having an account with us</DS.Para>
						</DS.AccountCreationInfo>
					</DS.containerAcct>
					{profileData && (
						<DS.AcctInfo>
							<DS.accountName>
								<DS.AccountInfoHeader>Account Name</DS.AccountInfoHeader>
								{profileData.firstname} {profileData.lastname}
							</DS.accountName>
							<DS.accountNumber>
								<DS.AccountInfoHeader>Account Number</DS.AccountInfoHeader>
								{profileData.accountnumber}
							</DS.accountNumber>

							<DS.accountBalance>
								<DS.AccountInfoHeader> Account Balance</DS.AccountInfoHeader>#
								{profileData.currentbalance}
							</DS.accountBalance>
						</DS.AcctInfo>
					)}

					<DS.Recent>Recent Transactions</DS.Recent>
					<DS.recentTrans>
						<BootstrapTable keyField="id" data={RecentTransactions} columns={columns} striped hover />
					</DS.recentTrans>
				</DS.RightSection>
			</DS.DashboardWrapper>
		</DS.DashboardContainer>
	);
};
