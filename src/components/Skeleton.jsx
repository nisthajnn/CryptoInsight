const Skeleton = ({ className }) => {
    return (
      <div className="animate-pulse">
        <div className={`	bg-#ddb14d rounded-md ${className}`}></div>
      </div>
    )
  }
  
  export default Skeleton
