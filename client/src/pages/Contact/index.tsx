import { RootState } from "@/store"
import { setText } from "@/store/backGroundSlice"
import { setMouseIsHovered } from "@/store/mouseSlice"
import React, {
    BaseSyntheticEvent,
    FormEvent,
    useCallback,
    useEffect,
    useRef,
} from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { setInputs } from "@/store/contactSlice"
import { IoSend } from "react-icons/io5"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Footer from "@/components/footer"
import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6"
import useChildPopup from "@/hooks/useChildPopup"

gsap.registerPlugin(useGSAP)

const valdateInputs = (payload: {
    name: string
    email: string
    message: string
}) => {
    return [payload.name, payload.email, payload.message].every((d) => d)
}

const Contact: React.FC = () => {
    const dispatch = useDispatch()
    const contactInputs = useSelector((state: RootState) => state.contact)
    const animationContext = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        dispatch(setMouseIsHovered(false))
        dispatch(setText("CONTACT."))
    }, [])

    useGSAP(() => {
        gsap.to(".animate-arrow", {
            repeat: -1,
            x: 10,
            duration: 1,
            animationDuration: 2,
        })
    }, [[{ scope: animationContext }]])

    const handleEmailClick = useCallback(async (email: string) => {
        window.navigator.clipboard
            .writeText(email)
            .then(() => toast.info("email coppied"))
            .catch(() => toast.error("can't copy!!"))
    }, [])

    const handleSendMessage = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (!valdateInputs(contactInputs)) {
                toast.error("invalid contact information!!!")
                return
            }
            toast.error("api call")
            toast.success("message sent successfully!")
        },
        [contactInputs],
    )

    const handleInputsCnahge = (e: BaseSyntheticEvent) => {
        dispatch(setInputs({ key: e.target.name, value: e.target.value }))
    }

    useChildPopup(animationContext, "0.3", [])

    return (
        <div
            className="mx-[15%] my-24 font-serif text-[#0C0C0C] dark:text-white"
            ref={animationContext}
        >
            <header className="text-6xl font-bold relative w-fit">
                Contact
                <span className="after:absolute after:w-2 after:h-2 after:bg-[#0C0C0C] dark:after:bg-white after:bottom-2 after:-right-3"></span>
            </header>
            <p className="my-10">
                Get in touch or send a email directly on{" "}
                <strong
                    className="font-bold cursor-pointer"
                    onClick={() => handleEmailClick("pralaygiri297@gmail.com")}
                >
                    pralaygiri297@gmail.com
                </strong>
            </p>
            <form onSubmit={handleSendMessage}>
                <section className="flex flex-col *:w-[60%] gap-10 *:px-4 *:py-3 *:text-xl *:bg-transparent *:border *:border-gray-700  *:outline-none *:rounded-sm *:opacity-85 *:transition-all dark:*:placeholder:text-inherit *:placeholder:text-[#0C0C0C] *:placeholder:opacity-60">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={contactInputs.name}
                        required={true}
                        placeholder="Name"
                        className="dark:focus:bg-[#0C0C0C] focus:bg-white  focus:bg-opacity-40 focus:opacity-100"
                        onChange={handleInputsCnahge}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={contactInputs.email}
                        required={true}
                        placeholder="Email"
                        className="dark:focus:bg-[#0C0C0C] focus:bg-white focus:bg-opacity-40 focus:opacity-100"
                        onChange={handleInputsCnahge}
                    />
                    <textarea
                        name="message"
                        id="message"
                        value={contactInputs.message}
                        placeholder="Message"
                        required={true}
                        rows={5}
                        className="resize-none dark:focus:bg-[#0C0C0C] focus:bg-white focus:bg-opacity-40 focus:opacity-100"
                        onChange={handleInputsCnahge}
                    ></textarea>
                </section>
                <button className="text-lg font-thin rounded-sm my-10  bg-[#0C0C0C] text-white dark:bg-gray-200 dark:text-[#0C0C0C] px-5 py-3 flex gap-2 justify-center items-center overflow-hidden">
                    Send Message
                    <span className="send-icon">
                        <IoSend />
                    </span>
                </button>
            </form>
            <div className="my-10">
                <NavLink
                    to={"/"}
                    className="flex gap-5 items-center w-fit group"
                >
                    <p className="group-hover:underline group-hover:underline-offset-4">
                        Go Back Home
                    </p>
                    <FaArrowRightLong className="text-2xl animate-arrow" />
                </NavLink>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
