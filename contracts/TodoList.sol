// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TodoList {
    struct Todo {
        uint id;
        string task;
        bool completed;
    }

    uint public taskCount = 0;
    mapping(uint => Todo) public todos;

    event TaskCreated(uint id, string task, bool completed);
    event TaskCompleted(uint id, bool completed);
    event TaskUpdated(uint id, string task);
    event TaskDeleted(uint id);

    function createTask(string memory _task) public {
        taskCount++;
        todos[taskCount] = Todo(taskCount, _task, false);
        emit TaskCreated(taskCount, _task, false);
    }

    function toggleComplete(uint _id) public {
        Todo storage _todo = todos[_id];
        _todo.completed = !_todo.completed;
        emit TaskCompleted(_id, _todo.completed);
    }

    function updateTask(uint _id, string memory _task) public {
        Todo storage _todo = todos[_id];
        _todo.task = _task;
        emit TaskUpdated(_id, _task);
    }

    function deleteTask(uint _id) public {
        delete todos[_id];
        emit TaskDeleted(_id);
    }
}
