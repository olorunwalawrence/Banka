import Style from 'styled-components';

export const signupContainer = Style.div`
  display:flex;

`;

export const spinnerWrapper = Style.div`
position:fixed;
top:200px;
left:45%;
`;

export const error = Style.span`
color:red;
font-size:12px;
margin-left:0px;
`;

export const SignupLeft = Style.div`
  flex:1;
  background-size: cover;
   background-position: left 40%;
  background-repeat: no-repeat;
  height: 100vh;

`;

export const Animationcard = Style.div`
	background: linear-gradient(45deg, black, transparent);
	position: absolute;
  top: 200px;
  left:17%
	height: 210px;
	width: 15%;
	margin: 1px auto;
	color: white;
	border-radius: 100px;
`;

export const Img = Style.img`
	margin: 35px;
	padding-left: 28px;
`;
export const Signupright = Style.div`
  flex:1;
text-align:right;
padding-left:20px;
display:flex;
flex-direction:column;
justify-content:center;
`;
export const FormInput = Style.input`
background: #fff;
    border: 1px solid #9a9a9a;
    border-radius: 4px;
    padding: 10px 2%;
    margin: 13px 0;
    font-size: 16px;
    line-height: 22px;
    color: #3e4c59;
    width: 90%;
    position: relative;
`;
export const formRow = Style.div``;
export const formGroup = Style.div`
text-align:left;
`;

export const Form = Style.form`
  margin:1px auto;
  width:90%;
 
`;
export const SiteLogo = Style.div``;
export const SignupBotton = Style.button`
  padding:12px;
  width:90%;
  background: #174a41;
  color:#fff;
  font-weight
`;
export const SignupHeadText = Style.div`
    font-size: 20px;
    color: #49393b;
    line-height: 22px;
    margin-top: 30px;
    margin-bottom:30px;
    font-family: CircularStd,Helvetica,sans-serif;
    text-align:center;
`;
export const SignupLeftImage = Style.img``;

export const Div = Style.div`
position:absolute;
color:white;
top:10px;
font-size:25px;
left:20px;
`;
