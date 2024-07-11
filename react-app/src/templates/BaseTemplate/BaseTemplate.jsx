
const BaseTemplate = ({className=null, children}) => {
    return (
        <main className={className}>
            {children}
        </main>
    )

}

export default BaseTemplate;
