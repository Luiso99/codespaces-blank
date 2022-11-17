The goal of this problem is to use prototypal inheritance in Javascript.

 

Implement inheritance as described below-

 

Create a function Employee that takes a single parameter and assigns it to member variable 'title'.

Add the following functions to the Employee prototype -

setTitle - This function take a single parameter and assigns it to the title member variable.
getTitle - This function returns the member variable title.
 

Create a function Engineer that -

inherits from parent Employee.
takes 2 parameters - title (String) and isManager (boolean) and assigns it to parent's member variable title and self's member variable isManager. 
Add these functions to Engineer's existing prototype -

setIsManager - This function take a single parameter and assigns it to the member variable isManager.
getIsManager - This function returns the member variable isManager.
 

NOTE - The stub code takes care of testing the implementation. Make sure to inherit the parent. This is being tested too.