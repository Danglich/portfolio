import Curtain from '../components/Curtain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import Button from '../components/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useEffect, useState } from 'react';
import { checkEmpty } from '../utils';
import { useCallback } from 'react';
import ModalSuccess from '../components/ModalSuccess';
import axios from 'axios';
import { apiUrl } from '../constants';

function Contact() {
    const [isShowSuccess, setIsShowSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleToggleShowSuccess = useCallback(() => {
        setIsShowSuccess(!isShowSuccess);
    }, [isShowSuccess]);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeInput = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });

        if (e.target.name === 'name') {
            if (e.target.value) {
                setErrors({ ...errors, [e.target.name]: '' });
            } else {
                setErrors({ ...errors, [e.target.name]: 'Name is required' });
            }
        }
        if (e.target.name === 'subject') {
            if (e.target.value) {
                setErrors({ ...errors, [e.target.name]: '' });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Subject is required',
                });
            }
        }
        if (e.target.name === 'message') {
            if (e.target.value) {
                setErrors({ ...errors, [e.target.name]: '' });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]: 'Message is required',
                });
            }
        }
        if (e.target.name === 'email') {
            if (e.target.value) {
                if (
                    e.target.value.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    )
                ) {
                    setErrors({ ...errors, [e.target.name]: '' });
                } else {
                    setErrors({
                        ...errors,
                        [e.target.name]: 'Must be a valid email',
                    });
                }
            } else {
                setErrors({ ...errors, [e.target.name]: 'Email is required' });
            }
        }
    };

    const handleSubmit = async () => {
        let errorsSave = {};
        setIsSubmit(true);
        if (formValues.name) {
            errorsSave = { ...errorsSave, name: '' };
            setErrors({ ...errors, name: '' });
        }
        if (!formValues.name) {
            errorsSave = { ...errorsSave, name: 'Name is required' };
            setErrors({ ...errors, name: 'Name is required' });
        }

        if (formValues.subject) {
            errorsSave = { ...errorsSave, subject: '' };
            setErrors({ ...errors, subject: '' });
        }
        if (!formValues.subject) {
            errorsSave = { ...errorsSave, subject: 'Subject is required' };
            setErrors({
                ...errors,
                subject: 'Subject is required',
            });
        }

        if (formValues.message) {
            errorsSave = { ...errorsSave, message: '' };
            setErrors({ ...errors, message: '' });
        }
        if (!formValues.message) {
            errorsSave = { ...errorsSave, message: 'Message is required' };
            setErrors({
                ...errors,
                message: 'Message is required',
            });
        }

        if (formValues.email) {
            if (
                formValues.email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                )
            ) {
                errorsSave = { ...errorsSave, email: '' };
                setErrors({ ...errors, email: '' });
            } else {
                errorsSave = { ...errorsSave, email: 'Must be a valid email' };
                setErrors({
                    ...errors,
                    email: 'Must be a valid email',
                });
            }
        }
        if (!formValues.email) {
            errorsSave = { ...errorsSave, email: 'Message is required' };
            setErrors({ ...errors, email: 'Email is required' });
        }

        setErrors(errorsSave);

        // Thành công
        if (checkEmpty(errorsSave)) {
            await axios.post(`${apiUrl}/message/create`, formValues);
            setFormValues({ name: '', email: '', subject: '', message: '' });
            handleToggleShowSuccess();
        }
    };

    return (
        <>
            <div className="bg-[#111] dark:bg-white min-h-[100vh]">
                <h1 className="relative  animate-[fadeUp_0.7s_linear]  tracking-[16px] font-[900] text-[116px] max-md:text-[64px]  max-sm:tracking-[5px]  max-sm:text-[58px] text-[#232323] dark:text-[#1e253012] text-center py-[40px]">
                    CONTACT
                    <div className="absolute w-full flex justify-center top-[50%] translate-y-[-50%]">
                        <span className=" tracking-[2px] font-[800] text-white dark:text-[#555] text-[56px]  max-md:text-[30px]">
                            GET IN
                        </span>
                        <span className="font-[800]  max-md:text-[30px]  tracking-[2px] text-[#ffb400] dark:text-[#72b626] text-[56px] ml-[16px] inline-block">
                            TOUCH
                        </span>
                    </div>
                </h1>
                <div className="flex justify-center  animate-[fadeUp_0.7s_linear] ">
                    <div className="w-[1200px] flex gap-[24px] max-lg:mx-[20px] max-md:mb-[14px] max-lg:block  max-md:mx-[14px] mb-[28px]">
                        <div className="flex-1 text-white dark:text-[#555] pr-[24px] max-lg:mb-[24px]">
                            <h1 className="font-[800] text-[27px] text-white dark:text-[#555] mb-[12px]">
                                DON'T BE SHY !
                            </h1>
                            <p>
                                Feel free to get in touch with me. I am always
                                open to discussing new projects, creative ideas
                                or opportunities to be part of your visions.
                            </p>
                            <ul>
                                <li className="flex py-[8px] pt-[20px]">
                                    <LocationOnIcon className="text-[#ffb400] dark:text-[#72b626] mr-[10px] w-[40px!important] h-[40px!important]" />
                                    <div>
                                        <p className="text-[#a7a5a5] font-[500]">
                                            ADDRESS
                                        </p>
                                        <p>Hà Nội</p>
                                    </div>
                                </li>
                                <li className="flex py-[8px]">
                                    <DraftsIcon className="text-[#ffb400] dark:text-[#72b626] mr-[10px] w-[40px!important] h-[40px!important]" />
                                    <div>
                                        <p className="text-[#a7a5a5] font-[500]">
                                            EMAIL
                                        </p>
                                        <p>nguyendanglich30@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex py-[8px]">
                                    <SettingsPhoneIcon className="text-[#ffb400] dark:text-[#72b626] mr-[10px] w-[40px!important] h-[40px!important]" />
                                    <div>
                                        <p className="text-[#a7a5a5] font-[500]">
                                            PHONE
                                        </p>
                                        <p>0338864xxx</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-[2] ">
                            <div className="flex gap-[28px] max-md:block">
                                <div className="flex-1 max-md:mb-[30px]">
                                    <input
                                        className="h-[50px] text-white dark:text-[#555] w-full rounded-[30px] bg-[#2b2a2a]  dark:bg-[#eee]  px-[24px] outline-0  transition-all duration-[300ms] focus:border-[#ffb400] dark:border-[#72b626] border-[1px] border-[#2b2a2a] dark:bg-[#eee]  dark:bg-[#eee]   caret-[white] dark:caret-black "
                                        placeholder="YOUR NAME"
                                        onChange={handleChangeInput}
                                        value={formValues.name || ''}
                                        name="name"
                                    ></input>
                                    {isSubmit && errors.name && (
                                        <span className="text-[red] font-[300] block ml-[3px] mt-[4px]">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <input
                                        className="h-[50px] text-white dark:text-[#555] w-full rounded-[30px] bg-[#2b2a2a]  dark:bg-[#eee]  px-[24px] outline-0  transition-all duration-[300ms] focus:border-[#ffb400] dark:border-[#72b626] border-[1px] border-[#2b2a2a]  dark:bg-[#eee]   caret-[white] dark:caret-black"
                                        placeholder="YOUR EMAIL"
                                        onChange={handleChangeInput}
                                        value={formValues.email || ''}
                                        name="email"
                                    ></input>
                                    {isSubmit && errors.email && (
                                        <span className="text-[red] font-[300] block ml-[3px] mt-[4px]">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <input
                                className="h-[50px] text-white dark:text-[#555] w-full mt-[30px] rounded-[30px] bg-[#2b2a2a]  dark:bg-[#eee]  px-[24px] outline-0  transition-all duration-[300ms] focus:border-[#ffb400] dark:border-[#72b626] border-[1px] border-[#2b2a2a]  dark:bg-[#eee]   caret-[white] dark:caret-black "
                                placeholder="YOUR SUBJECT"
                                onChange={handleChangeInput}
                                value={formValues.subject || ''}
                                name="subject"
                            ></input>
                            {isSubmit && errors.subject && (
                                <span className="text-[red] font-[300] block ml-[3px] mt-[4px]">
                                    {errors.subject}
                                </span>
                            )}
                            <textarea
                                className="h-[200px] text-white dark:text-[#555] py-[16px] resize-none w-full mt-[30px] rounded-[30px] bg-[#2b2a2a]  dark:bg-[#eee]  px-[24px] outline-0  transition-all duration-[300ms] focus:border-[#ffb400] dark:border-[#72b626] border-[1px] border-[#2b2a2a]  dark:bg-[#eee]   caret-[white] dark:caret-black "
                                placeholder="YOUR MESSAGE"
                                onChange={handleChangeInput}
                                value={formValues.message || ''}
                                name="message"
                            ></textarea>
                            {isSubmit && errors.message && (
                                <span className="text-[red] font-[300] block ml-[3px] mt-[4px]">
                                    {errors.message}
                                </span>
                            )}
                            <div className="mt-[28px] max-md:flex max-md:justify-center">
                                <Button
                                    Icon={TelegramIcon}
                                    title="SEND MESSAGE"
                                    onClick={handleSubmit}
                                />
                                <ModalSuccess
                                    isShowing={isShowSuccess}
                                    toggle={handleToggleShowSuccess}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Curtain />
        </>
    );
}

export default Contact;
