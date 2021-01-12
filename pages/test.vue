<script>
export default {
    methods:{
        ...mapActions('login',[
            'input'
        ])
    },
    mounted() {
        this.input()
    },
}
</script>