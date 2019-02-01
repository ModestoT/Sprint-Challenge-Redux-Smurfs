1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Actions are packets of information which return a small object that links some data with that action type.
    Reducers: Reducers are what change our state based on which action type was sent through and the current state.
    Store: The store is where the whole applications state lives.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable which means we never mutate the original object. The application state is also global and any state stored there
    can be easily passed to any component as long as you connect it to the store. A component based state is a local state to that component and if another child component 
    needed access to that state it would have to be passed down to it via props. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    
    redux-thunk is a middleware that allows us to preform asynchronous operations inside our Action Creators. Redux-thunk returns a function from the action creator that 
    gives access to the dispatch function which then allows it to dispatch a new action 
