(function(c,a,f){var b=function(){c.BaseAppender.call(this)};b.prototype=Object.create(c.BaseAppender.prototype);b.prototype.name="ConsoleAppender";b.prototype.log=function(d,b,g,h,j){switch(d){case c.ERROR:d=a.console.error||a.console.log;break;case c.WARN:d=a.console.warn||a.console.log;break;default:d=a.console.info||a.console.log}var e=[];e.push(new Date(b));g!==f&&e.push(g);h!==f&&e.push(h);j!==f&&e.push(j);d.apply(a.console,e)};a.console&&c.addAppender(b)})(LogJS,this);