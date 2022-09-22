//Add a new state called membershipactivetilldate : date. Whenever a new member is created give him 
//one month of free trial from the day he is created in your platform via constructor.


//Add a new function called renew Membership which based on membership type (Standard or Yearly) 
//increase the membershipactivetilldate 
//by 1 month or 1 year respectively. Also change the membership type accordingly
//

class User{
    static count=0;

    constructor(name,id){
        this.name=name;
        this.id=id;
        User.count++;
    }

    printNumberOfUsers(){
        return User.count;
    }
}

class Student extends User{
    pDate=new Date();
    constructor(id,name,email){
        super(name,id);
        this.email=email;
        this.date=new Date();
        this.mTime=24*60*60*30*1000;
        
        

    }


    renMembership(typeOfMembership){

        if(typeOfMembership === 'Yearly'){
            this.date=new Date();
            this.mTime= this.mTime*365/30;
        }
        else if(typeOfMembership === 'Monthly'){
            this.date=new Date();
        }
    }

    memChecker(){
        if(this.date.getTime()+this.mTime >= this.pDate.getTime()){
            console.log('You have an active membership');
        }
        else{
            console.log('Your membership time has expired');

        }
    }

    getInfo(){
        return `${this.id} ${this.name} `;
    }
    

}

const u=new User("Aman",2);
 const u2=new Student(56,"Ram",'rte@gmail.com');

//const u3=new Student(576,"Ram",'rte@gmail.com');
 //console.log(u2.getInfo());
 //console.log(u2.memChecker());
 u2.renMembership('Yearly');
