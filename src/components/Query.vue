<template>
    <v-app>
        <!--<v-form>
        </v-form>-->
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex
                        xs8
                        md4
                >
                    <v-text-field
                            v-model="box_id"
                            label="请输入箱号"
                            required
                    ></v-text-field>
                </v-flex>
                <v-flex
                        xs4
                        md4
                >
                    <v-btn color="primary" @click="queryFunc">查询</v-btn>
                </v-flex>
            </v-layout>
            <v-layout wrap>
                <v-data-table dark
                              :loading="isLoading"
                              :headers="headers"
                              :items="desserts"
                              :items-per-page="5"
                              rows-per-page-text="每页显示数量"
                              class="elevation-1"
                              no-results-text="未找到查询的信息"
                              no-data-text="🙃"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item.box_id }}</td>
                        <td class="text-xs-right">{{ props.item.evt_cate }}</td>
                        <td class="text-xs-right">{{ props.item.box_stat }}</td>
                        <td class="text-xs-right">{{ props.item.dest_shop }}</td>
                        <td class="text-xs-right">{{ props.item.prd_qty }}</td>
                        <td class="text-xs-right">{{ props.item.prd_typ }}</td>
                        <td class="text-xs-right">{{ props.item.batch_no }}</td>
                        <td class="text-xs-right">{{ props.item.mfg_date }}</td>
                        <td class="text-xs-right">{{ props.item.exp_date }}</td>
                        <td class="text-xs-right">{{ props.item.do_no }}</td>
                    </template>
                </v-data-table>
            </v-layout>
        </v-container>

    </v-app>
</template>

<script>
    export default {
        name: "Query",
        data(){
            return {
                isLoading : false,
                box_id : String(),
                /*boxIdRules : [
                    v => !!v || '箱号不能为空',
                    v => v.length <= 40 || '箱号必须少于40个字符!',
                ],*/
                headers     : [
                    {text:'箱号',value:'box_id'},
                    {text:'操作',value:'evt_cate'},
                    {text:'箱子状态',value:'box_stat'},
                    {text:'仓位',value:'dest_shop'},
                    {text:'数量',value:'prd_qty'},
                    {text:'产品类型',value:'prd_typ'},
                    {text:'场内批次',value:'batch_no'},
                    {text:'生产日期',value:'mfg_date'},
                    {text:'保质期',value:'exp_date'},
                    {text:'送货单',value:'do_no'},
                    /*{text:'操作者',value:'evt_usr'},
                    {text:'操作时间',value:'evt_timestamp'},
                    {text:'箱子备注',value:'box_note'},*/
                ],
                desserts    : []
            }
        },
        methods : {
            queryFunc() {
                this.isLoading = true;
                console.log(this.box_id);
                let trxId = 'FHISWHBOX';
                let inObj = {
                    trx_id : 'FHISWHBOX',
                    action_flg : 'H',
                    box_id : this.box_id
                };

                let formData = new FormData()
                formData.append('trxId','FHISWHBOX');
                let strInMsg = JSON.stringify(inObj);
                formData.append('strInMsg',strInMsg);
                this.axios.post('wms-visionox-web-query/sendMsg.do',formData,{
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(res=>{
                    let data = JSON.parse(res.data);
                    console.log(data);
                    let tbData = []
                    for(let i=0;i<data.oaryA.length;i++){
                        tbData.push({
                            evt_cate : data.oaryA[i].evt_cate,
                            box_id : data.oaryA[i].box_id,
                            box_stat : data.oaryA[i].box_stat,
                            dest_shop : data.oaryA[i].dest_shop,
                            prd_qty : data.oaryA[i].prd_qty,
                            prd_typ : data.oaryA[i].prd_typ,
                            batch_no : data.oaryA[i].batch_no,
                            mfg_date : data.oaryA[i].mfg_date,
                            exp_date : data.oaryA[i].exp_date,
                            do_no : data.oaryA[i].do_no,
                        })
                    }
                    this.desserts = data.oaryA;
                    console.log(tbData);
                    // this.desserts = tbData;
                    this.isLoading = false;
                }).catch(err=>{
                    console.log(err);
                    this.isLoading = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>