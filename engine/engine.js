export let queue = {

    queue: [],

    dequeue(q = this.queue) {

        q.sort((a,b) => { return b[0] - a[0] });
            
            q.forEach(e => {

                console.log('\n');
                e[1].action(e[2],e[3]);;

            });

        this.queue = [];

    }

}