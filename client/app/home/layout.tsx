export default function HomeLayout({ children, customerFeedback

}: {
    children: React.ReactNode,
    customerFeedback: React.ReactNode
}) {

    return (
        <div className="flex flex-col h-full w-full gap-2"  >
            {children}
            {customerFeedback}
        </div>
    )
}