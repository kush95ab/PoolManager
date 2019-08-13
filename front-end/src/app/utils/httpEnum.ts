export enum HttpEnum {
    // Basic urls
    BASEURL = 'http://localhost:8000/',
    AUTH    = 'http://localhost:8000/api/auth',    
    UPLOADFILE = 'http://localhost:8000/api/file/upload',

    // User operation related urls
    
    UPDATEUSER = 'http://localhost:8000/api/user/updateUser',
    ADDUSER = 'http://localhost:8000/api/user/addUser',
    GETUSER = 'http://localhost:8000/api/profile',
    DELETEUSER = 'http://localhost:8000/api/user/deleteUser',

    // Student operation related urls
    UPDATESTUDENT = 'http://localhost:8000/api/profile/update',
    GETSTUDENTS = 'http://localhost:8000/api/student/getall',
    ADDSTUDENT = 'http://localhost:8000/api/student/addStudent',
    DELSTUDENT ='http://localhost:8000/api/student/deleteStudent',

    // Coach operation related urls
    UPDATECOACH = 'http://localhost:8000/api/profile/update',
    GETCOACHES = 'http://localhost:8000/api/coach/getall',
    ADDCOACH = 'http://localhost:8000/api/coach/addCoach',
    DELCOACH ='http://localhost:8000/api/coach/deleteCoach',

    // poolmanager operation related urls
    UPDATEPOOLMGR = 'http://localhost:8000/api/profile/update',
    GETPOOLMGRS = 'http://localhost:8000/api/poolmanager/getall',
    ADDPOOLMGR = 'http://localhost:8000/api/poolmanager/addPoolmanager',
    DELPOOLMGR ='http://localhost:8000/api/poolmanager/deletePoolmanager',

    // event operation related urls
    UPDATEEVENT = 'http://localhost:8000/api/event/update',
    GETEVENTS = 'http://localhost:8000/api/event/getall',
    ADDEVENT = 'http://localhost:8000/api/event/addEvent',
    DELEVENT ='http://localhost:8000/api/event/deleteEvent',

    //  operation related urls
    UPDATESKILL = 'http://localhost:8000/api/skill/update',
    GETSKILLS = 'http://localhost:8000/api/skill/getall',
    ADDSKILL = 'http://localhost:8000/api/skill/addSkill',
    DELSKILL ='http://localhost:8000/api/skill/deleteSkill',

    // image operation related urls
    UPDATEIMAGE = 'http://localhost:8000/api/image/update',
    GETIMAGES = 'http://localhost:8000/api/image/getall',
    ADDIMAGE = 'http://localhost:8000/api/image/addImage',
    DELIMAGE ='http://localhost:8000/api/image/deleteImage',

    // Notification operation related urls
    GETNORTIFICATION =  'http://localhost:8000/api/notify/getnotification'
}
