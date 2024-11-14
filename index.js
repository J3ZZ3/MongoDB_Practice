db = connect( 'mongodb://localhost/Codetribe' );

db.Facilitators.insertMany( [
   {
      name: '',
      location: '',
      course: ''
   }
] )

db.Trainees.insertMany( [
   {
    name: '',
    location: '',
    Facilitator: ''
   }
] )

db.Projects.insertMany( [
   {
    name: '',
    location: '',
    lesson: ''
   }
] )
