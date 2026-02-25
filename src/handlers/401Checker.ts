export default function sessionExpiredChecker(req: Response){
    if(req.status === 401){
        console.log("sorry, we have a 401 here!")
    }
}