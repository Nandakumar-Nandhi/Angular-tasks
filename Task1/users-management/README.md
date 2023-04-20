# Homework 2

  1) Create an angular application with Routing
  2) Create a service called users service
  3) Service should be used across modules to get data
  4) Use static data in service (no api data required)
  5) Create 3 new modules other than app module
  6) Name the modules as ‘Active’, ‘Deleted’, ‘Manage’
  7) Lazy load ‘Manage’ module though Routing
  8) Separate Routing module from app module 
  9) Create 3 components

        a.	User 
            i.	Should show user first name and last name
            ii.	Should show with a red border if user is deleted
            iii. Should show with a green border if user is active
            iv.	Should show Activate button if shown in Deleted feature
            v.	Should show Deactivate button if shown in Active feature
            vi.	Should show Details button if shown in Manage feature

        b.	UsersList
            i. Should show list of users using above component.

        c.	UserDetails
            i. Show all the details of a user

  10) Use Routing to navigate among modules
  11) Use nested routing in ‘Manage’ module to see UserDetails component  on   username click
  12) Handle Template errors for undefined objects

# User Model

    interface User {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        login: string;
        password: string;
        isDeleted: boolean;
    }

##
Please find mockup in below pages
Note # Use bootstrap Cards for styling the components as shown in mockup


# Evaluation Criteria

2: Angular application with multiple modules is up and working
3: Service is working as expected
4: Routing is working as expected and lazy loading is implemented
5: Application looks exactly like in the mockup which is build using recommended bootstrap styles
