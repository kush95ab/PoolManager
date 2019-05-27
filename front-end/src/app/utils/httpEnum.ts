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
    GETCOACHES = 'http://localhost:8000/api/student/getall',
    ADDCOACH = 'http://localhost:8000/api/student/addStudent',
    DELCOACH ='http://localhost:8000/api/student/deleteStudent',

    // poolmanager operation related urls
    UPDATEPOOLMGR = 'http://localhost:8000/api/profile/update',
    GETPOOLMGRS = 'http://localhost:8000/api/student/getall',
    ADDPOOLMGR = 'http://localhost:8000/api/student/addStudent',
    DELPOOLMGR ='http://localhost:8000/api/student/deleteStudent',

    // poolmanager operation related urls
    UPDATEEVENT = 'http://localhost:8000/api/profile/update',
    GETEVENTS = 'http://localhost:8000/api/student/getall',
    ADDEVENT = 'http://localhost:8000/api/student/addStudent',
    DELEVENT ='http://localhost:8000/api/student/deleteStudent',

    // poolmanager operation related urls
    UPDATESKILL = 'http://localhost:8000/api/profile/update',
    GETSKILLS = 'http://localhost:8000/api/student/getall',
    ADDSKILL = 'http://localhost:8000/api/student/addStudent',
    DELSKILL ='http://localhost:8000/api/student/deleteStudent',

    // poolmanager operation related urls
    UPDATEIMAGE = 'http://localhost:8000/api/profile/update',
    GETIMAGES = 'http://localhost:8000/api/student/getall',
    ADDIMAGE = 'http://localhost:8000/api/student/addStudent',
    DELIMAGE ='http://localhost:8000/api/student/deleteStudent',

    // Notification operation related urls
    GETNORTIFICATION =  'http://localhost:8000/api/notify/getnotification'
}
