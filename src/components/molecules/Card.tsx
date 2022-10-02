type Props = {
    title: string
    image1: string
    image2: string
    button_text: string
    text: string
}

export default function SubHeader({ title, image1, image2, button_text, text }: Props) {
    return (
        <div className='flex flew-row justify-between'>
            <div className='flex flex-col relative bg-black'>
                <img src={image1} />
                <img src={image2} height="218" width="267" />
                <span>
                    A collection of 10,000 hand-painted portraits with a surreal, vintage naturalist aesthetic.

                    Deposit Surreals into the Dark Portal to receive a free Dark Surreal mint. A maximum of 3 Surreals per wallet can be sent through the portal.
                </span>
                <button className='bg-[#461B1C] w-fit p-2 px-4'>The Dark Portal</button>
            </div>
        </div>
    )
}
