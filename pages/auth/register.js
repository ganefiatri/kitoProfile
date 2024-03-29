import Head from "next/head"
import Layout from "../../layout/layout"
import Link from "next/link"
import styles from "../../styles/Form.module.css"
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi"
import { useState } from "react"
import { useFormik } from "formik"
import { register_validate } from "../../lib/validate"
import { useRouter } from "next/router"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: register_validate,
        onSubmit
    })

    async function onSubmit(values) {
        const option = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        try {
            await fetch('/api/auth/signup', option)
                .then(res => res.json())
                .then(() => {
                    toast('Successfully Created User!', { hideProgressBar: true, autoClose: 2000, type: 'success', position: 'top-right' })
                    router.push('/auth/login')
                })
        } catch (error) {
            toast(error, { hideProgressBar: true, autoClose: 2000, type: 'error', position: 'top-right' })
        }


    }

    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">KITO REGISTER</h1>
                    <p className="w-3/4 mx-auto text-gray-400">Register to this page to see stock Product</p>
                </div>
                {/* form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input type="text" name="username" placeholder="Username" className={styles.input_text} {...formik.getFieldProps('username')} />
                        <span className="icon flex items-center px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    {formik.errors.username && formik.touched.username ? <span className="text-rose-500">{formik.errors.username}</span> : <></>}

                    <div className={styles.input_group}>
                        <input type="email" name="email" placeholder="email" className={styles.input_text} {...formik.getFieldProps('email')} />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}

                    <div className={styles.input_group}>
                        <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="password" className={styles.input_text} {...formik.getFieldProps('password')} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} className="cursor-pointer" />
                        </span>
                    </div>
                    {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>}

                    <div className={styles.input_group}>
                        <input type={`${show.cpassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password" className={styles.input_text} {...formik.getFieldProps('cpassword')} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} className="cursor-pointer" />
                        </span>
                    </div>
                    {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-rose-500">{formik.errors.cpassword}</span> : <></>}

                    {/* login botton */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>Register</button>
                    </div>

                    {/* handle to sign up */}
                    <p className="text-center text-gray-400">
                        Already have an account ? <Link href={'/auth/login'}><span className="text-blue-700">Sign In</span></Link>
                    </p>
                </form>
            </section>
        </Layout>
    )
}

export default Register;