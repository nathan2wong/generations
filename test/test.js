function Check() {
    alert("hi");
            var input = document.getElementById( 'birth_date' ).value;
            var d = new Date( input );

if ( !!d.valueOf() ) { // Valid date
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
} else {
    alert("wrong date")
}