
import { Container, Grid } from "@mui/material"
import Divider from '@mui/material/Divider'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
// import EmployeeList from "./EmployeeList"

// import { IAddEmployeeBody,} from "src/interfaces/Employee/IEmployee"
// import {
//     AddEmployeeDetails, getDesignationList,
//     resetAddEmployeeDetails
// } from "src/requests/Employee/RequestEmployee"

import { RootState } from 'src/store'
import { IsEmailValid, IsPhoneNoValid, getCalendarFormat } from "../Common/Util"


import { useNavigate } from 'react-router-dom'

const AddEnquiry = () => {
    const classList = [{ Id: 1, Name: "Play Group", Value: "1" },
    { Id: 2, Name: "Nursery", Value: "2" },
    { Id: 3, Name: "Jr. K.G", Value: "3" },
    { Id: 4, Name: "Sr. K.G", Value: "4" },
    { Id: 5, Name: "Day Care", Value: "5" }];
    const navigate = useNavigate();


    // const { Id } = useParams();

    const dispatch = useDispatch();
    const [classId, setClassId] = useState('0')
    const [StudentName, setStudentName] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [Age, setAge] = useState('')
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'Female', Value: "2" }
    ])
    const [Gender, setGender] = useState('0')
    const [FatherName, setFatherName] = useState('')
    const [FPhoneNo, setFPhoneNo] = useState('');
    const [MotherName, setMotherName] = useState('')
    const [MPhoneNo, setMPhoneNo] = useState('');
    const [Address, setAddress] = useState('')
    const [SocietyName,setSocietyName] = useState('')
    const [Email, setEmail] = useState('')



    const [EmployeeErrorMessage, setEmployeeErrorMessage] = useState('')
    const [BirthDateErrorMessage, setBirthDateErrorMessage] = useState('')
    const [FPhoneNoErrorMessage, setFPhoneNoErrorMessage] = useState('')
    const [MPhoneNoErrorMessage, setMPhoneNoErrorMessage] = useState('')
    const [EmailErrorMessage, setEmailErrorMessage] = useState('')
    const [GenderErrorMessage, setGenderErrorMessage] = useState('')
    const [Id, setId] = useState('')


    const DesignationList = useSelector((state: RootState) => state.Employee.DesignationList);
    const AddEmployeeMsg = useSelector((state: RootState) => state.Employee.AddEmployeeMsg);
    const EmployeeDetails = useSelector((state: RootState) => state.Employee.EmployeeDetails);


    const ClearFormFields = () => {
        setClassId('0')
        setStudentName('')
        setBirthDate('')
        setAge('')
        setGender('')
        setFatherName('')
        setFPhoneNo('')
        setMotherName('')
        setMPhoneNo('')
        setAddress('')
        setSocietyName('')
        setEmail('')
        
    }

    useEffect(() => {
        if (EmployeeDetails != null) {
            setClassId(EmployeeDetails.classId)
            setStudentName(EmployeeDetails.StudentName)
            setBirthDate(getCalendarFormat(EmployeeDetails.BirthDate))
            setAge(EmployeeDetails.Age)
            setGender(EmployeeDetails.Gender)
            setFatherName(EmployeeDetails.FatherName)
            setFPhoneNo(EmployeeDetails.FPhoneNo)
            setMotherName(EmployeeDetails.MotherName)
            setMPhoneNo(EmployeeDetails.MPhoneNo)
            setAddress(EmployeeDetails.Address)
            setSocietyName(EmployeeDetails.SocietyName)
            setEmail(EmployeeDetails.Email)
        }
    }, [EmployeeDetails])

    // useEffect(() => {
    //     dispatch(getDesignationList())
    //     const GetEmployeeDetailsBody: IGetEmployeeDetailsBody = {
    //         ID: Number(Id)
    //     }
    //     dispatch(getEmployeeDetails(GetEmployeeDetailsBody))

    // }, [Id])


    // useEffect(() => {
    //     if (AddEmployeeMsg != "") {
    //         toast.success(AddEmployeeMsg)
    //         dispatch(resetAddEmployeeDetails())
    //         ClearFormFields();
    //         // navigate("../../EmployeeList")
    //         dispatch(getEmployeeList())
    //     }
    // }, [AddEmployeeMsg])
    const clickclassId = (value) => {
        setClassId(value)
    }
    const clickStudentName = (value) => {
        setStudentName(value)
    }
    const clickFatherName = (value) => {
        setFatherName(value)
    }
    const clickFPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setFPhoneNo(value)
    }
    const clickMotherName = (value) => {
        setMotherName(value)
    }
    const clickMPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setMPhoneNo(value)
    }
    const clickAddress=(value) =>{
        setAddress(value)
    }
    const clickSocietyName=(value) =>{
        setSocietyName(value)
    }
    const clickBirthDate = (value) => {
        setBirthDate(value)
    }
    const clickClassId = (value) => {
        setClassId(value)
    }
    const clickEmail = (value) => {
        setEmail(value)
    }
    const clickGender = (value) => {
        setGender(value)
    }

    const BlurEmail = () => {
        setEmailErrorMessage(IsEmailValid(Email))
    }
    const BlurFPhoneNo = () => {
        setFPhoneNoErrorMessage(IsPhoneNoValid(FPhoneNo))
    }
    const BlurMPhoneNo = () => {
        setMPhoneNoErrorMessage(IsPhoneNoValid(MPhoneNo))
    }

    const IsFormValid = () => {
        let returnVal = true
        if (StudentName == "") {
            setEmployeeErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (EmailErrorMessage != "" && Email == "") {
            setEmailErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (FPhoneNoErrorMessage != "" && FPhoneNo == "") {
            setFPhoneNoErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (MPhoneNoErrorMessage != "" && MPhoneNo == "") {
            setMPhoneNoErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (Gender == "0") {
            setGenderErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (BirthDate == "") {
            setBirthDateErrorMessage("Field is mandatory")
            returnVal = false
        }
        return returnVal
    }
    // const clickSubmit = () => {
    //     if (IsFormValid()) {
    //         const AddEmployeeBody: IAddEmployeeBody = {
    //             ID: Id == undefined ? 0 : Number(Id),
    //             StudentName: StudentName,
                    // FatherName: FatherName,
                    // MotherName: MotherName,
                    // Address:Address,
                    //SocietyName:SocietyName
    //             BirthDate: BirthDate,
    //             DesignationId: Number(DesignationId),
    //             Gender: Number(Gender),
    //             Email: Email,
    //             PhoneNo: PhoneNo,
    //         }
    //         // dispatch(AddEmployeeDetails(AddEmployeeBody))
    //     }
    // }

    return (
        <Container>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <PageHeader heading={'Enquiry Form'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={classList} Label={'Class'} 
                        DefaultValue={classId}
                            ClickItem={clickClassId} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={StudentName} Label={'Student Name'}
                            ClickItem={clickStudentName}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    <Grid item xs={3}>
                        <CalendarField Item={BirthDate} Label={'Birth Date'}
                            ClickItem={clickBirthDate}
                            ErrorMessage={BirthDateErrorMessage} />
                    </Grid>
                    <Grid item xs={3}>
                        <InputField Item={StudentName} Label={'Age'}
                            ClickItem={clickStudentName}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    <Grid item xs={3}>
                        <RadioList ItemList={GenderList} Label={'Gender'} 
                        DefaultValue={Gender}
                            ClickItem={clickGender}
                            ErrorMessage={GenderErrorMessage} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={FatherName} Label={'Father Name'}
                            ClickItem={clickFatherName}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={FPhoneNo} Label={'Father Phone No'}
                            ClickItem={clickFPhoneNo} BlurItem={BlurFPhoneNo}
                            ErrorMessage={FPhoneNoErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={MotherName} Label={'Mother Name'}
                            ClickItem={clickMotherName}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={MPhoneNo} Label={'Mother Phone No'}
                            ClickItem={clickMPhoneNo} BlurItem={BlurMPhoneNo}
                            ErrorMessage={MPhoneNoErrorMessage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={Address} Label={'Address'}
                            ClickItem={clickAddress}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={SocietyName} Label={'Society Name'}
                            ClickItem={clickSocietyName}
                            ErrorMessage={EmployeeErrorMessage} />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <InputField Item={Email} Label={'Email '}
                            ClickItem={clickEmail} BlurItem={BlurEmail}
                            ErrorMessage={EmailErrorMessage} />
                    </Grid>
                    
                    
                    <Grid item xs={12}>
                        <ButtonField Label={'Save'} ClickItem={''} />
                    </Grid>
                </Grid> <br />
                <Divider />
                <br /><br />
                {/* <Grid item xs={12} md={6} >
                    <EmployeeList ClickItemList={clickEmployee} />

                </Grid> */}
            </Grid>
        </Container>
    )
}

export default AddEnquiry
