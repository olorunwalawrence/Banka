import React from 'react';

import * as DS from './profile.style';
import { HarmBurger } from '../hambugger/hamBurger';
// import { RecentTransactions } from '../../asset/data';
// import BootstrapTable from 'react-bootstrap-table-next';
// import { Link } from 'react-router-dom';

export const UserProfile = () => {
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
	return (
		<DS.DashboardContainer>
			<DS.DashboardWrapper>
				<DS.LeftSideBar>
					<HarmBurger />
				</DS.LeftSideBar>

				<DS.RightSection>
					<DS.containerAcct>
						<DS.fontAwesomeWrapper>
							<DS.img
								src={require('../../asset/images/icons8-sales-performance-100 (1).png')}
								alt="image"
							/>
						</DS.fontAwesomeWrapper>

						<DS.AccountCreationInfo>
							<DS.Header>you are welcome olorunwa lawrence </DS.Header>
							<DS.Para>
								{' '}
								we noticed you have not created an account yet kindly click the bottom below to create
								an account
							</DS.Para>
						</DS.AccountCreationInfo>
					</DS.containerAcct>

					<DS.AcctInfo>
						<DS.accountName>
							<DS.AccountInfoHeader>Account Name</DS.AccountInfoHeader>
							olorunwa lawrence
						</DS.accountName>
						<DS.accountNumber>
							<DS.AccountInfoHeader>Account Number</DS.AccountInfoHeader>
							1234567898765432
						</DS.accountNumber>

						<DS.accountBalance>
							<DS.AccountInfoHeader> Account Balance</DS.AccountInfoHeader>
							#500,0000
						</DS.accountBalance>
					</DS.AcctInfo>

					<DS.Recent>Other Profile Informations</DS.Recent>
					<DS.recentTrans>
						{/* <BootstrapTable keyField="id" data={RecentTransactions} columns={columns} striped hover /> */}
					</DS.recentTrans>
				</DS.RightSection>
			</DS.DashboardWrapper>
		</DS.DashboardContainer>
	);
};
