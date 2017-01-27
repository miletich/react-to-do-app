import expect from 'expect';

import TodoAPI from './../../api/TodoAPI';
import localStorageMock from './../../../__mocks__/localStorage';


 describe('TodoAPI', () => {
   it('shoudld exist', () => {
     expect(TodoAPI).toExist();
     expect(localStorageMock).toExist();
   });

   describe('setTodos', () => {
     window.localStorage = localStorageMock;


     beforeEach(() => {
       localStorage.clear();
     });

     it('should set valid todos array', () => {
       const todos = [{
         id: 23,
         text: 'test all files',
         completed: false
       }];
       TodoAPI.setTodos(todos);

       const actualTodos = JSON.parse(localStorage.getItem('todos'));

       // toBe would test if it's the very same object, toEqual tests if the values are equal
       expect(actualTodos).toEqual(todos);
     });

     it('should not set invalid todos array', () => {
       const badTodos = {a: 'b'};
       TodoAPI.setTodos(badTodos);

       expect(localStorage.getItem('todos')).toEqual(null);
     });

     describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
          const actualTodos = TodoAPI.getTodos();

          expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in loclaStorage', () => {
          const todos = [{
            id: 23,
            text: 'test all files',
            completed: false
          }];

          // it's best to test as little as possible.
          // adding a call to TodoAPI.setTodos would also mean verifying if that is working as well
          localStorage.setItem('todos', JSON.stringify(todos));
          const actualTodos = TodoAPI.getTodos();

          expect(actualTodos).toEqual(todos);
        });
     });

     describe('filterTodos', () => {
       const todos = [{
         id: 1,
         text: 'Some text',
         completed: true
       },
       {
         id: 2,
         text: 'Other text text',
         completed: false
       },
       {
         id: 3,
         text: 'Some more text',
         completed: true
       }];

       it('should return all items if showCompleted is true', () => {
         const filteredTodos = TodoAPI.filterTodos(todos, true, '');

         expect(filteredTodos.length).toBe(3);
       });

       it("should return non-completed items when shwoCompleted is false", () => {
         const filteredTodos = TodoAPI.filterTodos(todos, false, '');

         expect(filteredTodos.length).toBe(1);
       });

       it('should sort items by completed status', () => {
         const filteredTodos = TodoAPI.filterTodos(todos, false, '');

         expect(filteredTodos[0].completed).toBe(false);
       });

       it('should filter todos by searchText', () => {
         const filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

         expect(filteredTodos.length).toBe(2);
       });

       it('should return all todos if searchText is empty', () => {
         const filteredTodos = TodoAPI.filterTodos(todos, true, '');

         expect(filteredTodos.length).toBe(3);
       });
     });
   });
 });
