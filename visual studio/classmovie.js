class person{
    constructor(name,age,profession){
        this.name=name;
        this.age=age;
        this.profession=profession;
    }
   getname(){
       console.log("the name is "+this.name)
   }
   getage(){
       console.log("the age is "+this.age);

   }
   getprofession(){
       console.log("the profession is "+this.profession)
   }
   setname(newname){
       this.name=newname;
   }
   setage(newage){
       this.age=newage
   }
   setprofession(newprofession){
       this.profession=newprofession
   }

} 
var person1=new person();
person1.setname("sasi");
person1.setage(21);
person1.setprofession("developer");
person1.getname();
person1.getage();
person1.getprofession()