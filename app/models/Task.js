export default class Task {
  #id;
  #name;
  #duration;
  #intervals;
  #rests;
  #numberIntervals;

  set id(id) {
    this.#id = id
  }
  
  get id() {
    return this.#id
  }

  set name(name) {
    this.#name = name
  }

  get name() {
    return this.#name
  }

  set duration(duration) {
    this.#duration = duration
  }
  
  get duration() {
    return this.#duration
  }
  set intervals(intervals) {
    this.#intervals = intervals
  }

  get intervals() {
    return this.#intervals
  }

  set rests(rests) {
    this.#rests = rests
  }
  
  get rests() {
    return this.#rests
  }
  
  set numberIntervals(numberIntervals) {
    this.#numberIntervals = numberIntervals
  }
  
  get numberIntervals() {
    return this.#numberIntervals
  }
}