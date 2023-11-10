{
    // Array 
    type Marks=number[]
    interface IMarks{
        [index:number]:number
    }
    const s1:Marks=[10,12,23]
    const s2:IMarks=[11,13,14]

    // Function 
    type Show=(num:number[])=>void
    interface IShow{
        (num:IMarks):void //number[] can not used
    }

    const getShow:Show=s=>console.log(s);
    const getIShow:IShow=s=>console.log(s);

    getShow(s1)
    getShow([1,2,3,4])
    getIShow(s2)
    getIShow([5,6,7,8])

}