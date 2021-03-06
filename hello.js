/* Using C# via Edge.js: http://tjanczuk.github.io/edge */

var edge = require('edge');

var payload = { anInteger: 1, aNumber: 3.1415, aString: 'fooaaa', aBoolean: true, aBuffer: new Buffer(10), anArray: [ 1, 'fooaaaaa' ], anObject: { a: 'foaaaao', b: 12 };

// https://github.com/mongolab/mongodb-driver-examples/blob/master/c%23/CSharpSimpleExample.cs
// mongodb://jdavid:j****1**5@ds147995.mlab.com:47995/knowledgebase
// CURLING: curl --data "{ anInteger: 1, aNumber: 3.1415, aString: 'fooaaa', aBoolean: true, aBuffer: new Buffer(10), anArray: [ 1, 'fooaaaaa' ], anObject: { a: 'foaaaao', b: 12 }" https://wt-1dab165a842a25a9750ca5e80cd906bb-0.run.webtask.io/hello


var getPerson = edge.func(function () {/*
    using System.Threading.Tasks;
    public class Person
    {
        public int anInteger = 1;
        public double aNumber = 3.1415;
        public string aString = "foo";
        public bool aBoolean = true;
        public byte[] aBuffer = new byte[10];
        public object[] anArray = new object[] { 1, "foo" };
        public object anObject = new { a = "foo", b = 12 };
    }

    public class Startup
    {
        public async Task<object> Invoke(dynamic input)
        {
            Person person = new Person()
            {
              anInteger = (int)input.anInteger,
              aNumber = (double)input.aNumber,
              aString = (string)input.aString,
              aBoolean = (bool)input.aBoolean,
              aBuffer = (byte[])input.aBuffer,
              anArray = (object[])input.anArray,
              anObject = (dynamic)input.anObject,
            };
            return person;
        }
    }
*/});

module.exports = function (context, cb) {
    // getPerson(payload, cb);
    getPerson(context.data, cb);
}
