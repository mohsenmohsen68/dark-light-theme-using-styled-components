import * as YUP from 'yup'
const registerSchema = YUP.object().shape({
    username: YUP.string().min(4, "نام کاریر حداقل باید 4 حرف داشته باشد ...").max(29, "نام کاریر حداکثر 29 حرفی است ...").required("نام کاربری باید وارد شود ..."),
    password:YUP.string().min(4, "رمز حداقل باید 4 حرف داشته باشد ...").max(29, "رمز حداکثر 29 حرفی است ...").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,"رمز به قدر کافی سخت نیست ...").required("رمز باید وارد شود ...."),
})

export default registerSchema