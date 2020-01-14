import React from 'react';
import { useSelector } from 'react-redux';
import * as DS from './profile.style';
import { HarmBurger } from '../hambugger/hamBurger';
import BootstrapTable from 'react-bootstrap-table-next';
import { userProfile } from '../../asset/data';

export const UserProfile = () => {
	const profile = useSelector(state => state.ViewProfile.data);
	const userProfile = [
		profile && {
			address: profile.address,
			phone: profile.phonenumber,
			username: profile.username,
			bvn: profile.bvnnumber,
			openingbalance: profile.openingbalance,
			type: profile.type,
			email: profile.email,
			status: profile.status,
		},
	];
	const columns = [
		{
			dataField: 'address',
			text: 'Address',
		},
		{
			dataField: 'phone',
			text: 'Phone Number',
		},
		{
			dataField: 'username',
			text: 'Username',
		},
		{
			dataField: 'bvn',
			text: 'BVN',
		},
		{
			dataField: 'openingbalance',
			text: 'Opening Balance',
		},
		{
			dataField: 'email',
			text: 'Email',
		},
		{
			dataField: 'status',
			text: 'Account Status',
		},
	];

	return (
		<DS.DashboardContainer>
			{profile && (
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
								<DS.Header>
									you are welcome {profile.firstname} {profile.lastname}
								</DS.Header>
								<DS.Para>
									{' '}
									Kingdly Verify your profile details if its tally with what you supplied if not
									contact the admin
								</DS.Para>
							</DS.AccountCreationInfo>
						</DS.containerAcct>

						<DS.AcctInfo>
							<DS.accountName>
								<DS.AccountInfoHeader>Account Name</DS.AccountInfoHeader>
								{profile.firstname} {profile.lastname}
							</DS.accountName>
							<DS.accountNumber>
								<DS.AccountInfoHeader>Account Number</DS.AccountInfoHeader>
								{profile.accountnumber}
							</DS.accountNumber>

							<DS.accountBalance>
								<DS.AccountInfoHeader> Account Balance</DS.AccountInfoHeader># {profile.currentbalance}
							</DS.accountBalance>
						</DS.AcctInfo>
						<DS.Recent>Other Profile Informations</DS.Recent>
						<DS.recentTrans>
							<DS.profileInfo>
								{/*	<DS.info>
									<DS.span>Home Addresss</DS.span> {profile.address}{' '}
								</DS.info>
								<DS.info>
									<DS.span>Phone Number</DS.span>
									{profile.phonenumber}
								</DS.info>
								<DS.info>
									<DS.span> Username</DS.span>
									{profile.username}
								</DS.info>
								<DS.info>
									<DS.span> BVN Number</DS.span> {profile.bvnnumber}
								</DS.info>
								<DS.info>
									<DS.span> Opening Balance</DS.span>
									{profile.openingbalance}
								</DS.info>
								<DS.info>
									{' '}
									<DS.span> Account Type</DS.span>
									{profile.type}
								</DS.info>
								<DS.info>
									{' '}
									<DS.span> Email</DS.span> {profile.email}
								</DS.info>
								<DS.info>
									<DS.span> Status </DS.span> {profile.status}
								</DS.info> */}
							</DS.profileInfo>
							<BootstrapTable keyField="id" data={userProfile} columns={columns} striped hover />
						</DS.recentTrans>
					</DS.RightSection>
				</DS.DashboardWrapper>
			)}
		</DS.DashboardContainer>
	);
};
