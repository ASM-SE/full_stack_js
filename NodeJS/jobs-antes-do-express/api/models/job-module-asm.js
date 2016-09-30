
'use strict';

const jobs = [];

function Job(title, company, contact) {
  this.title = title;
  this.company = company;
  this.contact = contact;
}

Job.prototype.save = function() {
  jobs.push(this);
};



Job.get = function(title) {
  if(title) {
    return jobs.filter(
      (job) => job.title.toLowerCase().startsWith(title)
    );
  }
  return jobs;
}


new Job('Analista', 'Prodama', 'Anderson').save();


module.exports = Job;
